import "../css/Quote.css";

const quotes = [
  {
    quote: "When you have faults, do not fear to abandon them.",
    author: "Confucius",
  },
  {
    quote:
      "They must often change who would be constant in happiness or wisdom.",
    author: "Confucius",
  },
  {
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
    author: "Maya Angelou",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote: "Only I can change me life, no one can do it for me.",
    author: "Carol Burnett",
  },
  {
    quote: "When in doubt, choose change.",
    author: "Lily leung",
  },
  {
    quote:
      "Never lose sight of the face that the most important yard stick to your success is how you treat other people.",
    author: "Barbara Bush",
  },
  {
    quote:
      "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    author: "Winston S. Churchill",
  },
  {
    quote:
      "Success is walking from failure to failure with no loss of enthusiasm.",
    author: "Winston Churchill",
  },
  {
    quote: "Opportunities don’t happen. You create them.",
    author: "Chris Grosser",
  },
];

function Quote() {
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  return (
    <div>
      <span>"{todaysQuote.quote}" - </span>
      <span>{todaysQuote.author}</span>
    </div>
  );
}

export default Quote;