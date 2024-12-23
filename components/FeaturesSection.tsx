import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export function FeaturesSection() {
  const features = [
    {
      title: "Unique Curations",
      description: "Find hidden gems from authentic sources",
    },
    {
      title: "Smart Itineraries",
      description: "All-in-one and real-time adaptability",
    },
    {
      title: "Collect and Dream",
      description: "Bookmark your favorite places",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 flex justify-center items-center pt-5">
      <div className="relative w-full md:w-96 h-[200px] lg:max-w-[500px] xl:max-w-[600px] mx-auto">
        {features.map((feature, index) => (
          <Card key={index} className={`feature-slide slide-${index + 1}`}>
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}
