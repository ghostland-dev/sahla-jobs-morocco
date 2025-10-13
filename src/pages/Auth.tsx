import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const { toast } = useToast();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "تم تسجيل الدخول بنجاح",
      description: "مرحباً بعودتك!",
    });
    window.location.href = "/profile";
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupData.password !== signupData.confirmPassword) {
      toast({
        title: "خطأ",
        description: "كلمات المرور غير متطابقة",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "تم إنشاء الحساب بنجاح",
      description: "مرحباً بك في فرص عمل!",
    });
    window.location.href = "/profile";
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center mx-auto mb-4 shadow-elegant">
            <Briefcase className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">فرص عمل</h1>
          <p className="text-white/80">منصة التوظيف الأولى في المغرب</p>
        </div>

        <Card className="p-8 border-border/50">
          <Tabs defaultValue="login" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">تسجيل الدخول</TabsTrigger>
              <TabsTrigger value="signup">إنشاء حساب</TabsTrigger>
            </TabsList>

            {/* Login Tab */}
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <Label htmlFor="login-email">البريد الإلكتروني</Label>
                  <Input
                    id="login-email"
                    type="email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    placeholder="example@email.com"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="login-password">كلمة المرور</Label>
                  <Input
                    id="login-password"
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                    placeholder="••••••••"
                    required
                    className="mt-1"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span>تذكرني</span>
                  </label>
                  <a href="#" className="text-primary hover:underline">
                    نسيت كلمة المرور؟
                  </a>
                </div>

                <Button type="submit" className="w-full bg-gradient-primary hover:shadow-elegant transition-all">
                  تسجيل الدخول
                </Button>
              </form>
            </TabsContent>

            {/* Signup Tab */}
            <TabsContent value="signup">
              <form onSubmit={handleSignup} className="space-y-4">
                <div>
                  <Label htmlFor="signup-name">الاسم الكامل</Label>
                  <Input
                    id="signup-name"
                    type="text"
                    value={signupData.name}
                    onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                    placeholder="أدخل اسمك الكامل"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="signup-email">البريد الإلكتروني</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    value={signupData.email}
                    onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                    placeholder="example@email.com"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="signup-password">كلمة المرور</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    value={signupData.password}
                    onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                    placeholder="••••••••"
                    required
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="signup-confirm-password">تأكيد كلمة المرور</Label>
                  <Input
                    id="signup-confirm-password"
                    type="password"
                    value={signupData.confirmPassword}
                    onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}
                    placeholder="••••••••"
                    required
                    className="mt-1"
                  />
                </div>

                <div className="text-sm text-muted-foreground">
                  بإنشائك لحساب، أنت توافق على{" "}
                  <a href="#" className="text-primary hover:underline">
                    شروط الخدمة
                  </a>{" "}
                  و{" "}
                  <a href="#" className="text-primary hover:underline">
                    سياسة الخصوصية
                  </a>
                </div>

                <Button type="submit" className="w-full bg-gradient-primary hover:shadow-elegant transition-all">
                  إنشاء حساب
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <div className="mt-6 text-center">
            <Button variant="link" onClick={() => window.location.href = "/"}>
              العودة إلى الصفحة الرئيسية
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
