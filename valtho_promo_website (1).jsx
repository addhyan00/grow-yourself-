import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WealthoPromo() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8">
      <header className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Image src="/wealtho-brand-name-logo.png" alt="Wealtho Logo" width={150} height={150} />
        </div>
        <h1 className="text-5xl font-bold mb-4">Skills That Pay</h1>
        <p className="text-lg max-w-xl mx-auto">
          Join <span className="font-semibold">Wealtho</span>, where we teach you real-world skills that help you earn money as a student.
        </p>
        <p className="mt-4 text-xl font-semibold animate-pulse">Don't just dream of earning, make it your reality today!</p>
      </header>

      <section className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Meet Addhyan Jain</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <Image src="/my pic.jpg" alt="Addhyan Jain" width={250} height={300} className="rounded-2xl shadow-lg" />
          <p className="text-lg max-w-3xl">
            Hello, I'm <span className="font-semibold">Addhyan Jain</span>. I'm a student just like you, but alongside my studies, I've been consistently working just 40 to 50 minutes a day and generating a good monthly income. Thanks to the right guidance and skills, I no longer need to ask my family for money. I've been working in this space for a while now, and I know exactly how students can practically start earning. If you're serious about building your skills and income as a student, you're in the right place.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
        {[
          "Communication Skills",
          "Affiliate Marketing",
          "Meta-AD Master",
          "Social Media Optimization",
          "Lead Generation",
          "Real Editing",
          "Cryptocurrency",
          "Pro-Investing"
        ].map((skill) => (
          <motion.div 
            key={skill} 
            className=""
            whileHover={{ scale: 1.05 }}
          >
            <Card className="bg-white text-black rounded-2xl shadow-lg p-4 h-full">
              <CardContent className="flex flex-col items-center justify-center h-full">
                <CheckCircle className="text-blue-500 w-10 h-10 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{skill}</h3>
                <p className="text-center text-sm">Master {skill} and unlock new income opportunities.</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      <section className="bg-blue-600 rounded-2xl shadow-xl p-6 max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-2xl font-bold mb-4">Why Choose Wealtho?</h2>
        <p className="text-lg mb-4">✅ Practical Skills, Not Just Theory</p>
        <p className="text-lg mb-4">✅ Start Earning Within Weeks</p>
        <p className="text-lg mb-4">✅ Flexible for Students, No Experience Needed</p>
        <p className="text-xl font-bold mt-6 animate-bounce">Seats Are Limited! Don't Miss This Chance to Become Financially Independent!</p>
      </section>

      <div className="text-center mt-12">
        <a 
          href="https://wa.me/917999461666?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Wealtho%20and%20start%20learning%20skills." 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <Button className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-blue-100 rounded-2xl shadow-xl">
            Click Here for More Details
          </Button>
        </a>
      </div>

      <section className="max-w-4xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Aman Verma", feedback: "Wealtho changed my life! I started earning as a student within 2 months." },
            { name: "Priya Singh", feedback: "The skills I learned here are practical and super valuable." },
            { name: "Rahul Mehta", feedback: "Highly recommend Wealtho to anyone who wants to earn while studying." }
          ].map((testimonial) => (
            <Card key={testimonial.name} className="bg-white text-black p-4 rounded-2xl shadow-lg">
              <CardContent>
                <p className="text-sm italic mb-4">"{testimonial.feedback}"</p>
                <p className="font-semibold">- {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Certificate for Trust & Proof</h2>
        <div className="flex justify-center">
          <Image 
            src="/wealtho.jpg" 
            alt="Wealtho Certificate" 
            width={500} 
            height={350} 
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      <a 
        href="https://wa.me/917999461666" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg flex items-center justify-center"
      >
        <MessageCircle className="text-white w-6 h-6" />
      </a>
    </div>
  );
}
