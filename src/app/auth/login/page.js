"use client";
import { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {toast} from "react-hot-toast";
export default function Login() {
  const { login } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const onFinish = ({ email, password }) => {
  const savedUser = JSON.parse(localStorage.getItem("user"));
  if (!savedUser) {
    return toast.error("No user found. Please sign up.");
  }
  if (savedUser.email !== email || savedUser.password !== password) {
    return toast.error("Invalid email or password");
  }
  setLoading(true);
  setTimeout(() => {
    login(email); 
    toast.success("Logged in successfully");
    router.push("/");
    setLoading(false);
  }, 1000);
};
  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Invalid email format" },
          ]}
        >
          <Input placeholder="you@example.com" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Login
          </Button>
        </Form.Item>
        <div className="text-center text-sm">
         <p>Don&#39;t have an account?{" "}</p>
          <Link href="/auth/signup" className="text-blue-600 hover:underline">
            Create one
          </Link>
        </div>
      </Form>
    </div>
  );
}
