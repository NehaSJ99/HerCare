import React from "react";
import { Link } from "react-router-dom";
import { Calendar, BookOpen, Heart, Sparkles } from "lucide-react";

/**
 * Example blog data array — you could fetch or store this elsewhere
 */
const blogPosts = [
  {
    id: 1,
    title: "Understanding Your Menstrual Cycle",
    excerpt:
      "Learn about the phases of your cycle and how to better track your well-being.",
    link: "https://www.betterhealth.vic.gov.au/health/conditionsandtreatments/menstrual-cycle",
  },
  {
    id: 2,
    title: "Best Foods to Eat During Your Period",
    excerpt:
      "Discover nutrient-rich foods that can help reduce discomfort and boost energy.",
    link: "https://www.medicalnewstoday.com/articles/what-to-eat-on-your-period",
  },
  {
    id: 3,
    title: "Managing Cramps: Tips & Remedies",
    excerpt:
      "Find out how to soothe period pain through natural remedies and helpful habits.",
    link: "https://www.mayoclinic.org/diseases-conditions/menstrual-cramps/diagnosis-treatment/drc-20374944",
  },
  {
    id: 4,
    title: "Tracking Your Cycle with Technology",
    excerpt:
      "Explore the top period tracking apps and gadgets for a more precise experience.",
    link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10905339/",
  },
];

const Dashboard = () => {
  return (
    <div className="bg-gradient-to-r from-pink-50 via-purple-50 to-white min-h-screen">
      {/** Navbar */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center text-pink-600 space-x-2">
            <Sparkles className="h-6 w-6" />
            <span className="font-bold text-xl">HerCare</span>
          </Link>
          <div className="space-x-4">
            <Link
              to="/dashboard"
              className="text-gray-700 hover:text-pink-500 transition-colors"
            >
              Dashboard
            </Link>
            <Link
              to="/features"
              className="text-gray-700 hover:text-pink-500 transition-colors"
            >
              Features
            </Link>
            <Link
              to="/blog"
              className="text-gray-700 hover:text-pink-500 transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/profile"
              className="text-gray-700 hover:text-pink-500 transition-colors"
            >
              Profile
            </Link>
          </div>
        </div>
      </nav>

      {/** Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/** Welcome Section */}
        <header className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600">
            Welcome to Your Dashboard
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Hi there! This is your personal space for tracking your periods,
            reading the latest health insights, and accessing our exclusive
            tools. We’re here to help you feel your best every day.
          </p>
        </header>

        {/** Quick Tools / Shortcuts */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            to="/tracker"
            className="bg-white shadow hover:shadow-lg transition-shadow rounded-xl p-6 flex flex-col items-center text-center"
          >
            <div className="h-16 w-16 bg-pink-500 rounded-full mb-4 flex items-center justify-center text-white">
              <Calendar className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-pink-500 mb-2">
              Period Tracker
            </h3>
            <p className="text-gray-600">
              Log and monitor your monthly cycle effortlessly.
            </p>
          </Link>

          <Link
            to="https://www.thewomens.org.au/health-information/periods/healthy-periods"
            className="bg-white shadow hover:shadow-lg transition-shadow rounded-xl p-6 flex flex-col items-center text-center"
          >
            <div className="h-16 w-16 bg-purple-500 rounded-full mb-4 flex items-center justify-center text-white">
              <Heart className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-purple-500 mb-2">
              Wellness Tips
            </h3>
            <p className="text-gray-600">
              Discover tips to stay active, eat well, and relieve stress.
            </p>
          </Link>

          <Link
            to="https://hercareai.streamlit.app/"
            className="bg-white shadow hover:shadow-lg transition-shadow rounded-xl p-6 flex flex-col items-center text-center"
          >
            <div className="h-16 w-16 bg-pink-600 rounded-full mb-4 flex items-center justify-center text-white">
              <BookOpen className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-semibold text-pink-600 mb-2">
              Resources & FAQs
            </h3>
            <p className="text-gray-600">
              Browse expert articles and find answers to commonly asked questions.
            </p>
          </Link>
        </section>

        {/** Blog Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
            Explore Our Latest Blogs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white shadow rounded-xl hover:shadow-lg transition-shadow p-6 flex flex-col"
              >
                <h3 className="text-xl font-semibold text-pink-600 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 flex-grow mb-4">{post.excerpt}</p>
                <Link
                  to={post.link}
                  className="text-purple-500 font-medium hover:underline mt-auto"
                >
                  Read more &rarr;
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/** Additional Resources or Info (Example) */}
        <section className="bg-white rounded-xl shadow p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Looking for More?
          </h2>
          <p className="text-gray-700 mb-6">
            Dive deeper into our advanced tools — from personalized health
            reports to AI-driven cycle predictions. Take your health journey to
            the next level with HerCare’s premium features!
          </p>
          <Link
            to="/premium"
            className="inline-flex items-center px-6 py-3 bg-pink-500 text-white rounded-lg transition-transform hover:scale-105"
          >
            Upgrade to Premium
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
