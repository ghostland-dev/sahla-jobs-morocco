import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم إرسال رسالتك بنجاح",
      description: "سنتواصل معك قريباً",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "contact@forosaamal.ma",
      link: "mailto:contact@forosaamal.ma"
    },
    {
      icon: Phone,
      title: "الهاتف",
      value: "+212 5XX XXX XXX",
      link: "tel:+212500000000"
    },
    {
      icon: MapPin,
      title: "العنوان",
      value: "الدار البيضاء، المغرب",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">تواصل معنا</h1>
          <p className="text-xl max-w-3xl mx-auto text-white/90 leading-relaxed">
            نحن هنا للمساعدة. تواصل معنا للحصول على الدعم أو الإجابة على استفساراتك
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="p-6 border-border/50">
              <h2 className="text-2xl font-bold mb-6">معلومات الاتصال</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">{info.title}</p>
                      <p className="text-sm text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-border/50 bg-gradient-primary text-white">
              <h3 className="text-xl font-bold mb-3">ساعات العمل</h3>
              <div className="space-y-2 text-white/90">
                <p>الاثنين - الجمعة: ٩:٠٠ - ١٨:٠٠</p>
                <p>السبت: ٩:٠٠ - ١٣:٠٠</p>
                <p>الأحد: مغلق</p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="lg:col-span-2 p-8 border-border/50">
            <h2 className="text-2xl font-bold mb-6">أرسل لنا رسالة</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">الاسم الكامل *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="أدخل اسمك"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="email">البريد الإلكتروني *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@email.com"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="subject">الموضوع *</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="موضوع الرسالة"
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="message">الرسالة *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="اكتب رسالتك هنا..."
                  className="mt-1 min-h-[200px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-primary hover:shadow-elegant transition-all gap-2"
                size="lg"
              >
                <Send className="w-5 h-5" />
                إرسال الرسالة
              </Button>
            </form>
          </Card>
        </div>

        {/* FAQ Section */}
        <Card className="mt-12 p-8 border-border/50">
          <h2 className="text-2xl font-bold mb-6 text-center">الأسئلة الشائعة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div>
              <h3 className="font-bold mb-2">كيف يمكنني التقديم على وظيفة؟</h3>
              <p className="text-sm text-muted-foreground">
                قم بتصفح الوظائف المتاحة، اختر الوظيفة المناسبة، واضغط على "قدم الآن" لملء نموذج التقديم.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">هل التسجيل مجاني؟</h3>
              <p className="text-sm text-muted-foreground">
                نعم، التسجيل في المنصة مجاني بالكامل لجميع الباحثين عن عمل.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">كم من الوقت يستغرق الرد على الطلبات؟</h3>
              <p className="text-sm text-muted-foreground">
                عادة ما نرد على الطلبات خلال ٥-٧ أيام عمل.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">كيف يمكنني نشر وظيفة كشركة؟</h3>
              <p className="text-sm text-muted-foreground">
                اضغط على "انشر وظيفة" في الصفحة الرئيسية واملأ النموذج المخصص للشركات.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
