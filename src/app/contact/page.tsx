"use client";

import { useState } from "react";
import { Flex, Button } from "@/once-ui/components";
import { baseURL } from "@/app/resources";
import { contact, person } from "@/app/resources/content";
import { Schema } from "@/once-ui/modules";
import Link from "next/link";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const result = await res.json();
    setLoading(false);
    setSubmitted(result.success);
  };

  return (
    <Flex maxWidth="l">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={contact.title}
        description={contact.description}
        path={contact.path}
        image={`${baseURL}/og?title=${encodeURIComponent(contact.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${contact.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Flex as="form" direction="column" maxWidth={600} paddingBottom="8" gap="40" onSubmit={handleSubmit}>
        I’m actively seeking Full-Stack opportunities in the United States. If you believe I could be a good fit for your team, feel free to reach out to me at pantangisaipreethi@gmail.com. I’d love to connect!
        <Button style={{backgroundColor: "black", color: "white"}}><Link href="/SaiPreethiPantangi.pdf" style={{color: "white"}} target="_blank">Download Resume</Link></Button>
        {/* <Input id="name" label="Name" value={form.name} onChange={handleChange} required />
        <Input id="email" label="Email Address" type="email" value={form.email} onChange={handleChange} required />
        <Textarea id="message" label="Message" value={form.message} onChange={handleChange} rows={5} required />
        <Button type="submit" variant="primary" disabled={loading}>
          {loading ? "Sending..." : submitted ? "Sent!" : "Send Message"}
        </Button> */}
      </Flex>
    </Flex>
  );
}
