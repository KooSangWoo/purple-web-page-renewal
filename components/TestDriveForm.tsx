import { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Card } from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface TestDriveFormProps {
  language: "ko" | "en";
}

export default function TestDriveForm({
  language,
}: TestDriveFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const content = {
    ko: {
      title: "Contact Us",
      subtitle:
        "We're paving the way for the future of cerebrovascular AI clinical decision support.",
      description: "Connect with us to discover how.",
      firstName: "First Name",
      firstNamePlaceholder: "Enter first name",
      lastName: "Last Name",
      lastNamePlaceholder: "Enter last name",
      email: "Email",
      emailPlaceholder: "example@company.com",
      option: "Option",
      optionPlaceholder: "Select option",
      options: {
        All: "All",
        hemorrhage: "Hemorrhage",
        infarct: "Infarct",
        aneurysm: "Aneurysm",
      },
      message: "Message",
      messagePlaceholder: "Enter your message...",
      submit: "Submit",
      submitting: "Submitting...",
      success: "Message Sent!",
      successMessage: "Our team will contact you soon.",
    },
    en: {
      title: "Contact Us",
      subtitle:
        "We're paving the way for the future of cerebrovascular AI clinical decision support.",
      description: "Connect with us to discover how.",
      firstName: "First Name",
      firstNamePlaceholder: "Enter first name",
      lastName: "Last Name",
      lastNamePlaceholder: "Enter last name",
      email: "Email",
      emailPlaceholder: "example@company.com",
      option: "Option",
      optionPlaceholder: "Select option",
      options: {
        All: "All",
        hemorrhage: "Hemorrhage",
        infarct: "Infarct",
        aneurysm: "Aneurysm",
      },
      message: "Message",
      messagePlaceholder: "Enter your message...",
      submit: "Submit",
      submitting: "Submitting...",
      success: "Message Sent!",
      successMessage: "Our team will contact you soon.",
    },
  };

  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {t.title}
              </span>
            </h2>
            <p className="text-xl text-white/60 mb-2">
              {t.subtitle}
            </p>
            <p className="text-xl text-white/60">
              {t.description}
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 md:p-12 bg-[#1a1a2e]/60 backdrop-blur-xl border-purple-500/20">
              {!submitted ? (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="firstName"
                        className="text-white/80"
                      >
                        {t.firstName} *
                      </Label>
                      <Input
                        id="firstName"
                        placeholder={t.firstNamePlaceholder}
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-purple-500/50"
                      />
                    </div>

                    {/* Last Name */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="lastName"
                        className="text-white/80"
                      >
                        {t.lastName} *
                      </Label>
                      <Input
                        id="lastName"
                        placeholder={t.lastNamePlaceholder}
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-purple-500/50"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="email"
                        className="text-white/80"
                      >
                        {t.email} *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder={t.emailPlaceholder}
                        required
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-purple-500/50"
                      />
                    </div>

                    {/* Option */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="option"
                        className="text-white/80"
                      >
                        {t.option} *
                      </Label>
                      <Select
                        defaultValue="hemorrhage"
                        required
                      >
                        <SelectTrigger className="bg-white/5 border-white/10 text-white">
                          <SelectValue
                            placeholder={t.optionPlaceholder}
                          />
                        </SelectTrigger>
                        <SelectContent position="popper" className="bg-[#2a2a3e]/95 backdrop-blur-xl border-purple-500/20 text-white">
                          <SelectItem
                            value="All"
                            className="text-white focus:bg-purple-500/20 focus:text-white"
                          >
                            {t.options.All}
                          </SelectItem>
                          <SelectItem
                            value="hemorrhage"
                            className="text-white focus:bg-purple-500/20 focus:text-white"
                          >
                            {t.options.hemorrhage}
                          </SelectItem>
                          <SelectItem
                            value="infarct"
                            className="text-white focus:bg-purple-500/20 focus:text-white"
                          >
                            {t.options.infarct}
                          </SelectItem>
                          <SelectItem
                            value="aneurysm"
                            className="text-white focus:bg-purple-500/20 focus:text-white"
                          >
                            {t.options.aneurysm}
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-white/80"
                    >
                      {t.message}
                    </Label>
                    <Textarea
                      id="message"
                      placeholder={t.messagePlaceholder}
                      rows={12}
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-purple-500/50 resize-none min-h-[200px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white py-6 shadow-lg shadow-purple-500/50 transition-all"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {t.submit}
                  </Button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl mb-4 text-white">
                    {t.success}
                  </h3>
                  <p className="text-white/60 text-lg">
                    {t.successMessage}
                  </p>
                </motion.div>
              )}
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}