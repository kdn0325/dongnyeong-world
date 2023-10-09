"use client";
import React, { FormEvent, useRef, useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { IMailForm } from "../Interface";

const EmailSection = () => {
  const serverKey: string = process.env.NEXT_PUBLIC_MAIL_SERVER_KEY!;
  const templateKey: string = process.env.NEXT_PUBLIC_MAIL_TEMPLATE_KEY!;
  const privateKey: string = process.env.NEXT_PUBLIC_MAIL_PRIVATE_KEY!;

  const form = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState<IMailForm>({
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmitForm = async (event: FormEvent) => {
    event.preventDefault();

    try {
      if (form.current) {
        await emailjs.sendForm(
          serverKey,
          templateKey,
          form.current,
          privateKey
        );
        console.log("success");
        setFormData({
          email: "",
          subject: "",
          message: "",
        });
        toast.success("메일 전송에 성공하였습니다.", {
          duration: 4000,
          position: "top-center",
          icon: "👏",
          iconTheme: {
            primary: "#000",
            secondary: "#fff",
          },
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        });
      }
    } catch (error) {
      console.log("fail");
      setFormData({
        email: "",
        subject: "",
        message: "",
      });

      toast.error("메일 전송에 실패하였습니다.", {
        duration: 4000,
        position: "top-center",
        icon: "🥲",
        iconTheme: {
          primary: "#000",
          secondary: "#fff",
        },
        ariaProps: {
          role: "status",
          "aria-live": "polite",
        },
      });
    }
  };

  // use client;

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          새로운 기회를 기다리고 있습니다. 질문, 안부, 또는 어떤 이야기든 함께
          나누고 싶어요. 언제든 연락 주세요!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/kdn0325">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/dongnyeong-kim-010598272/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form className="flex flex-col" ref={form} onSubmit={onSubmitForm}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              이메일
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="이메일을 입력해주세요."
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              제목
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="제목을 입력해주세요."
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              내용
            </label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleTextareaChange}
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="메시지를 입력해주세요."
            />
          </div>
          <button
            type="submit"
            value="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            메일 보내기
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
