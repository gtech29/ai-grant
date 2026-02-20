import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Cards() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-6xl px-6 py-16">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Key Project Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            This project will offer teacher candidates a favorable space that
            will assist them in practicing interview situations, developing
            their communication abilities, and self-assessing their progress.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-3 items-stretch">
          <Card className="flex flex-col h-full transition-all hover:shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-semibold tracking-tight">
                Interview Simulation
              </CardTitle>
              <CardDescription>
                Practice real interview situations.
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Students are going to simulate a set of real-world interview
                situations, train and solidify their professional communication
                skills, conduct self-reflection guided, critically assess
                chatbot responses, and recognize bias and constraints in the
                automated response.
              </p>
            </CardContent>

            <CardFooter className="pt-4">
              <Button variant="outline" size="sm">
                Learn More
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col h-full transition-all hover:shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-semibold tracking-tight">
                How Students Use It
              </CardTitle>
              <CardDescription>
                Structured practice and reflection.
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground leading-relaxed">
                The students start by choosing a simulated teaching interview
                situation and are asked to answer a series of pre-determined
                questions that would make them feel as though they are in a real
                hiring situation.
              </p>
            </CardContent>

            <CardFooter className="pt-4">
              <Button variant="outline" size="sm">
                Student Flow
              </Button>
            </CardFooter>
          </Card>

          <Card className="flex flex-col h-full transition-all hover:shadow-md">
            <CardHeader className="pb-4">
              <CardTitle className="text-xl font-semibold tracking-tight">
                Faculty Insights
              </CardTitle>
              <CardDescription>
                Structured evaluation framework.
              </CardDescription>
            </CardHeader>

            <CardContent className="flex-1">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Faculty review answers of students to determine their progress
                in communication skills, career clarity, and general awareness
                of limitations of AI systems.
              </p>
            </CardContent>

            <CardFooter className="pt-4">
              <Button variant="outline" size="sm">
                Faculty Flow
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
}
