import DiscordIcon from "@/components/icons/discord-icon";
import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {CogIcon} from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-12 ">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                {/* <CogIcon /> */}
                <div>
                  About
                  <span className="text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                    Granex
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              Granex Industrial Engineering Services, was established on January
              13, 2022, located in the southern part of Mindanao in the city of
              General Santos, South Cotabato. A sole proprietorship, owned and
              manage by Paul Joshua N. Gako. Our Marketing Director, Maria Luisa
              N. Gako has been in this field for more than 30 years, thus
              cementing her expertise in the supply of Industrial Parts. We
              sourced out our supplies not only domestically but globally as
              well. We get our parts and other supplies in the United States,
              Europe and Asia. We only sourced out products from reliable
              suppliers which Quality is their main focus. We believe in our
              capability and capacity to serve our clients requirements, not
              only with our quality products but with our sales and technical
              people who are assigned in the area for easy access of inquiries
              and services we offer.
            </CardContent>

            <CardFooter>
              {/* <Button asChild>
                <a href="https://discord.com/" target="_blank">
                  Join Discord
                </a>
              </Button> */}
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
