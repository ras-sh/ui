import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@ras-sh/ui";

function App() {
  return (
    <div className="mx-auto max-w-lg p-8">
      <h1 className="font-bold text-2xl">UI Library Test</h1>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Test Card</CardTitle>
          <CardDescription>Testing @ras-sh/ui components</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline">Click me</Button>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
