import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Icon} from "@/components/ui/icon";
import {icons} from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Innovative",
    description:
      "Showcases a commitment to cutting-edge solutions and technologies that solve complex engineering challenges, emphasizing creativity and forward-thinking approaches.",
  },
  {
    icon: "LineChart",
    title: "Reliable",
    description:
      "Highlights dependability and precision in delivering high-quality services on time and within budget, ensuring clients can trust their expertise.",
  },
  {
    icon: "Wallet",
    title: "Comprehensive",
    description:
      "Reflects the wide range of services offered, from initial concept development to final implementation, providing end-to-end solutions tailored to client needs.",
  },
  {
    icon: "Sparkle",
    title: "Efficient",
    description:
      "Demonstrates a focus on optimizing processes and resources, delivering cost-effective and timely results without compromising quality.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Benefits</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We focus on your success
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            At Granex, we believe that your success is the foundation of
            everything we do. Our team is committed to delivering construction
            solutions that not only meet your expectations but exceed them,
            ensuring your projects are completed on time, within budget, and to
            the highest standards. By partnering with us, you gain more than
            just a contractor—you gain a dedicated ally who prioritizes your
            goals, listens to your needs, and tailors every step of the process
            to achieve results that support your vision. From innovative designs
            to meticulous execution, we focus on building structures that
            empower your success and stand the test of time.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({icon, title, description}, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
