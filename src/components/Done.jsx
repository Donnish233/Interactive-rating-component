export default function Done({ rating }) {
  return (
    <main className="w-85 flex flex-col items-center gap-6">
      <img
        src="/images/illustration-thank-you.svg"
        alt="Thank you illustration"
      />
      <section className="bg-[#272E38] text-center text-amber-600 w-full rounded-3xl h-8 text-lg">
        You selected {rating} out of 5
      </section>
      <h1>Thank you!</h1>
      <p className="text-center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </main>
  );
}
