"use client";
import { useState } from "react";
import { Input, Button, Form, message } from "antd";
import Link from "next/link";
import {toast} from "react-hot-toast";

export default function SignUp() {
  const [loading, setLoading] = useState(false);

  const onFinish = (values) => {
  const { password, confirm, email } = values;

  if (password !== confirm) {
    return toast.success("Passwords do not match");
  }

  const existingUser = JSON.parse(localStorage.getItem("user"));

  if (existingUser && existingUser.email === email) {
    return toast.success("User already exists");
  }

  setLoading(true);

  setTimeout(() => {
    localStorage.setItem("user", JSON.stringify(values));
    toast.success("Sign up successful! Please login.");
    setLoading(false);
  }, 1000);
};


  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Full Name"
          name="name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="John Doe" />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            { required: true, message: "Please enter your phone number" },
            { pattern: /^[0-9]{10}$/, message: "Enter valid 10-digit number" },
          ]}
        >
          <Input placeholder="9876543210" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Invalid email format" },
          ]}
        >
          <Input placeholder="email@example.com" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter a password" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Confirm Password"
          name="confirm"
          rules={[{ required: true, message: "Please confirm your password" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Sign Up
          </Button>
        </Form.Item>

        <div className="text-center text-sm">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </div>
      </Form>
    </div>
  );
}
