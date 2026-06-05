"use client";

import { motion } from "framer-motion";

const links = [
  {
    title: "GitHub",
    subtitle: "github.com/Sanskar0603",
    url: "https://github.com/Sanskar0603",
    icon: (
      <svg className="w-6 h-6 text-boneWhite" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
      </svg>
    ),
    iconBg: "bg-carbon border border-boneWhite/20",
  },
  {
    title: "LinkedIn",
    subtitle: "Connect professionally",
    url: "https://www.linkedin.com/in/sanskar-yadav-a5519622a/",
    icon: (
      <svg className="w-5 h-5 text-boneWhite" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    iconBg: "bg-[#0A66C2]",
  },
  {
    title: "Instagram",
    subtitle: "Social Feed",
    url: "https://www.instagram.com/sanskaryadav0603?igsh=cGt0MWR0NHBxNGxu",
    icon: (
      <svg className="w-5 h-5 text-boneWhite" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    iconBg: "bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500",
  },
  {
    title: "Twitter / X",
    subtitle: "This is my project link",
    url: "https://stupendous-salamander-2b4fde.netlify.app/",
    icon: (
      <svg className="w-5 h-5 text-boneWhite" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
    iconBg: "bg-[#1DA1F2]",
  },
  {
    title: "Email",
    subtitle: "sanskaryadav0603@gmail.com",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=sanskaryadav0603@gmail.com",
    icon: (
      <svg className="w-5 h-5 text-boneWhite" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
    iconBg: "bg-amber-600",
  },
  {
    title: "Resume / CV",
    subtitle: "Download PDF",
    url: "https://drive.google.com/file/d/1GkJq_NVMA9wn4rT9aPrhSPZeJpDEjV1s/view?usp=sharing",
    icon: (
      <svg className="w-5 h-5 text-boneWhite" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
        <line x1="16" y1="13" x2="8" y2="13"></line>
        <line x1="16" y1="17" x2="8" y2="17"></line>
        <polyline points="10 9 9 9 8 9"></polyline>
      </svg>
    ),
    iconBg: "bg-teal-600",
  }
];

export default function Footer() {
  return (
    <footer id="contact" className="py-24 bg-[#0a0a0a] relative z-10 border-t border-boneWhite/10 overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-ember/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
        {/* LINKTREE SECTION */}
        <div className="max-w-2xl mx-auto flex flex-col space-y-4 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-display font-bold text-boneWhite mb-2">Connect with me</h2>
            <p className="text-boneWhite/60 font-body">Find me across the web or download my resume.</p>
          </motion.div>

          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target={link.url.startsWith('mailto:') ? "_self" : "_blank"}
              rel={link.url.startsWith('mailto:') ? "" : "noopener noreferrer"}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex items-center justify-between p-4 rounded-xl bg-graphite/40 border border-boneWhite/5 hover:border-boneWhite/20 hover:bg-graphite/60 transition-all duration-300 backdrop-blur-sm"
            >
              <div className="flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${link.iconBg}`}>
                  {link.icon}
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-bold text-boneWhite text-lg group-hover:text-ember transition-colors">
                    {link.title}
                  </span>
                  <span className="font-body text-sm text-boneWhite/50">
                    {link.subtitle}
                  </span>
                </div>
              </div>
              <div className="text-boneWhite/40 group-hover:text-boneWhite group-hover:translate-x-1 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="pt-8 border-t border-boneWhite/10 flex flex-col md:flex-row items-center justify-center">
          <div className="font-mono text-xs text-boneWhite/40 text-center">
            © {new Date().getFullYear()} Sanskar Yadav. All systems operational.
          </div>
        </div>
      </div>
    </footer>
  );
}
