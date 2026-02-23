// export default function CreateCampaign() {
//   return <h1 className="text-2xl font-bold">Create Campaign</h1>;
// }


"use client";

export default function CreateCampaignForm() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Create Campaign</h1>

      <form className="space-y-8">

        {/*Basic Campaign Information*/}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-medium mb-4">Basic Campaign Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Campaign Name"
              className="input" />

            <input type="text" placeholder="Brand / Client Name"
              className="input" />

            <select className="input">
              <option value="">Campaign Type</option>
              <option>Product Promotion</option>
              <option>Brand Awareness</option>
              <option>App Install</option>
              <option>Event Promotion</option>
              <option>Product Launch</option>
              <option>Giveaway / Contest</option>
              <option>Influencer Takeover</option>
              <option>Affiliate Marketig</option>
              <option>Discout / Offer Campaign</option>
              <option>User Generated Content</option>
              <option>Brand Collaboration</option>
              <option>Review / Testimonial Campaign</option>
              <option>Unboxing Campaign</option>
              <option>Seasonal Campaign</option>
              <option>Festival Campaign</option>
              <option>Pre-Launch / Teaser Campaign</option>
              <option>Rebranding Campaign</option>
              <option>CSR / Social Awareness Campaign</option>
              <option>Store / Website Traffic Campaign</option>
              <option>Live Stream Promotion</option>
            </select>

            <select className="input">
              <option value="">Campaign Category</option>
              <option>Fashion & Apparel</option>
              <option>Beauty & Skincare</option>
              <option>Health & Fitness</option>
              <option>Food & Beverages</option>
              <option>Technology & Gadgets</option>
              <option>Mobile Apps & SaaS</option>
              <option>Finance & FinTech</option>
              <option>Education & E-Learning</option>
              <option>Travel & Tourism</option>
              <option>Lifestyle</option>
              <option>Gaming & Esports</option>
              <option>Entertainment & Media</option>
              <option>Sports & Outdoors</option>
              <option>Automobile</option>
              <option>Real Estate</option>
              <option>E-commerce</option>
              <option>Jewelry & Accessories</option>
              <option>Home Decor & Furniture</option>
              <option>Parenting & Baby Care</option>
              <option>NGOs & Social Causes</option>
            </select>

            <select className="input">
              <option value="">Campaign Objective</option>
              <option>Brand Awareness</option>
              <option>Reach / Impressions</option>
              <option>Engagement (Likes, Comments, Shares)</option>
              <option>Follower Growth</option>
              <option>Website Traffic</option>
              <option>App Installs</option>
              <option>Lead Generation</option>
              <option>Sales / Conversions</option>
              <option>Product Trials</option>
              <option>Video Views</option>
              <option>Content Creation (UGC)</option>
              <option>Audience Education</option>
              <option>Event Registrations</option>
              <option>Email Signups</option>
              <option>Promo Code Usage</option>
              <option>Store Visits</option>
              <option>Community Building</option>
              <option>Brand Trust & Credibility</option>
            </select>
          </div>

          <textarea
            placeholder="Campaign Description"
            rows={4}
            className="input mt-4"
          />
        </section>

        {/*Campaign Timeline*/}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-medium mb-4">Campaign Timeline</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="date" className="input" />
            <input type="date" className="input" />

            {/* <select className="input">
              <option value="">Timezone</option>
              <option>IST (India)</option>
              <option>UTC</option>
              <option>EST</option>
              <option>PST</option>
            </select> */}
          </div>
        </section>

        {/*Budget & Payment Details*/}
        <section className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-medium mb-4">Budget & Payment Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="number"
              placeholder="Total Campaign Budget"
              className="input"
            />

            <select className="input">
              <option value="">Budget Type</option>
              <option>Fixed</option>
              <option>Per Influencer</option>
              <option>Performance Based</option>
            </select>

            <select className="input md:col-span-2">
              <option value="Payment Model">Payment Model</option>
              <option>Per Post</option>
              <option>Per Reel</option>
              <option>Per Story</option>
              <option>CPM</option>
              <option>CPC</option>
              <option>CPA</option>
            </select>
          </div>
        </section>

        {/*Actions*/}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="px-6 py-2 border rounded-lg"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-6 py-2 bg-black text-white rounded-lg"
          >
            Create Campaign
          </button>
        </div>

      </form>

      {/* Tailwind Input Utility */}
      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.6rem 0.75rem;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          outline: none;
        }
        .input:focus {
          border-color: LightBlue;
        }
      `}</style>
    </div>
  );
}
