import Breadcrumbs from "../../components/Breadcrumbs";
import SEO from "../../components/SEO";

export default function ContactPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Best Home Office Tech",
    url: "https://besthomeofficetech.com"
  };
  return (
    <>
      <SEO title="Contact" description="Get in touch with us." />
      <Breadcrumbs segments={[{ name: "Home", href: "/" }, { name: "Contact", href: "/contact" }]} />
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <form className="space-y-4 max-w-xl" aria-label="contact form">
        <div>
          <label htmlFor="name" className="block mb-1">
            Name
          </label>
          <input id="name" name="name" type="text" className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1">
            Email
          </label>
          <input id="email" name="email" type="email" className="w-full p-2 border rounded" required />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1">
            Message
          </label>
          <textarea id="message" name="message" className="w-full p-2 border rounded" rows={4} required></textarea>
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Send
        </button>
      </form>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
