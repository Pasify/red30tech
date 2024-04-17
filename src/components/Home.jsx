import featImg from "../assets/img-main.jpg";

export default function Home({ title }) {
  return (
    <div className="container">
      <img
        className="img-feat"
        src={featImg}
        alt="Red30 Tech conference attendees on a laptop"
      />

      <h1>{title} 2024</h1>
      <p>
        This is a fictitious company and conference created by{" "}
        <a
          href="https://www.pasify.github.io"
          target="_blank"
          rel="noreferrer noopener"
        >
          paskkal.io
        </a>
        , Join us for a transformative experience at the intersection of
        technology and sustainability. Red30 Tech is the leading provider of
        secure, customizable solutions designed to drive growth while
        prioritizing environmental responsibility. At our conference, expect to
        explore innovative tech solutions, learn about sustainable business
        practices, and network with industry leaders and visionaries. Gain
        actionable insights from top speakers shaping the future of technology
        and business, and join a community committed to making a positive impact
        on the planet..
      </p>
      <p>
        Don&apos;t miss this opportunity to gain valuable insights, network with
        industry experts, and explore the latest in technology and
        sustainability. Register now to secure your spot and be part of the
        movement to redefine the future with Red30 Tech!{" "}
      </p>
    </div>
  );
}
