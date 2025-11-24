import { useState } from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle2, XCircle, Lightbulb, Clock, Award } from "lucide-react";
import { toast } from "sonner";

const Assessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);

  const questions = [
    {
      id: 1,
      question: "What is the derivative of x²?",
      options: ["x", "2x", "x²", "2"],
      correct: "2x",
      explanation: "The power rule states that d/dx(x^n) = n·x^(n-1). For x², n=2, so the derivative is 2x^(2-1) = 2x.",
      difficulty: "Easy",
    },
    {
      id: 2,
      question: "Which of the following is a fundamental constant in quantum mechanics?",
      options: ["Planck's constant", "Avogadro's number", "Gas constant", "Boltzmann constant"],
      correct: "Planck's constant",
      explanation: "Planck's constant (h) is fundamental to quantum mechanics, relating energy and frequency of photons.",
      difficulty: "Medium",
    },
  ];

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) {
      toast.error("Please select an answer");
      return;
    }

    const isCorrect = selectedAnswer === questions[currentQuestion].correct;
    if (isCorrect) {
      setScore(score + 1);
    }
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setShowFeedback(false);
    } else {
      toast.success(`Quiz completed! Your score: ${score + (selectedAnswer === questions[currentQuestion].correct ? 1 : 0)}/${questions.length}`);
    }
  };

  const question = questions[currentQuestion];
  const isCorrect = selectedAnswer === question.correct;
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <Layout role="student">
      <div className="p-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Smart Assessment</h1>
          <p className="text-muted-foreground">Adaptive quiz with instant feedback</p>
        </div>

        {/* Progress */}
        <Card className="glass">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">15:30</span>
              </div>
            </div>
            <Progress value={progress} className="h-2" />
          </CardContent>
        </Card>

        {/* Question Card */}
        <Card className="glass border-primary/50">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Badge variant={question.difficulty === "Easy" ? "default" : question.difficulty === "Medium" ? "secondary" : "destructive"}>
                {question.difficulty}
              </Badge>
              <Badge variant="outline">
                <Award className="w-3 h-3 mr-1" />
                10 points
              </Badge>
            </div>
            <CardTitle className="text-xl mt-4">{question.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <RadioGroup value={selectedAnswer} onValueChange={setSelectedAnswer} disabled={showFeedback}>
              <div className="space-y-3">
                {question.options.map((option) => (
                  <div
                    key={option}
                    className={`flex items-center space-x-2 p-4 rounded-lg border-2 transition-all ${
                      showFeedback
                        ? option === question.correct
                          ? "border-success bg-success/10"
                          : option === selectedAnswer
                          ? "border-destructive bg-destructive/10"
                          : "border-border bg-muted/30"
                        : selectedAnswer === option
                        ? "border-primary bg-primary/10"
                        : "border-border hover:border-primary/50 hover:bg-muted/50"
                    }`}
                  >
                    <RadioGroupItem value={option} id={option} />
                    <Label htmlFor={option} className="flex-1 cursor-pointer font-medium">
                      {option}
                    </Label>
                    {showFeedback && option === question.correct && (
                      <CheckCircle2 className="w-5 h-5 text-success" />
                    )}
                    {showFeedback && option === selectedAnswer && option !== question.correct && (
                      <XCircle className="w-5 h-5 text-destructive" />
                    )}
                  </div>
                ))}
              </div>
            </RadioGroup>

            {showFeedback && (
              <Card className={`${isCorrect ? "bg-success/10 border-success/30" : "bg-warning/10 border-warning/30"}`}>
                <CardHeader>
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    {isCorrect ? "Correct!" : "Not quite"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{question.explanation}</p>
                  {!isCorrect && (
                    <div className="mt-3 p-3 rounded-lg bg-muted/50">
                      <p className="text-xs font-medium text-muted-foreground">AI Suggestion:</p>
                      <p className="text-sm mt-1">Review the chapter on derivatives and try practice problems.</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}

            <div className="flex gap-3">
              {!showFeedback ? (
                <Button onClick={handleSubmitAnswer} variant="cosmic" className="flex-1">
                  Submit Answer
                </Button>
              ) : (
                <Button onClick={handleNextQuestion} variant="cosmic" className="flex-1">
                  {currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="glass">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Current Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{score}/{currentQuestion + (showFeedback ? 1 : 0)}</div>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Accuracy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {currentQuestion + (showFeedback ? 1 : 0) > 0
                  ? Math.round((score / (currentQuestion + (showFeedback ? 1 : 0))) * 100)
                  : 0}
                %
              </div>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Time Remaining</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15:30</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Assessment;
