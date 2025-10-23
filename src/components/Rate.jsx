import { useState } from "react";

export default function Rate({ onRateSubmit }) {
  const [rating, setRating] = useState(null);

  return (
    <main className="rating w-82 flex flex-col gap-5">
      <div className="bg-[#272E38] rounded-full w-10 h-10 flex items-center justify-center">
        <img src="/images/icon-star.svg" alt="star icon" />
      </div>

      <h1 className="mt-6 mb-8">How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="rating-buttons w-full flex justify-center gap-4">
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            type="reset"
            onClick={() => setRating(num)}
            className={`w-11 h-11 rounded-full transition-all duration-150 hover:cursor-pointer
              ${
                rating === num
                  ? "bg-white text-black"
                  : "bg-[#272E38] text-white hover:bg-amber-600"
              }
            `}
          >
            {num}
          </button>
        ))}
      </div>

      <button
        className="submit-btn bg-amber-600 w-full text-black font-bold rounded-3xl h-10 hover:cursor-pointer"
        type="submit"
        onClick={() => {
          if (rating) onRateSubmit(rating);
          else alert("Please select a rating first!");
        }}
      >
        SUBMIT
      </button>
    </main>
  );
}
