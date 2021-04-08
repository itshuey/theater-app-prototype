interface EventPost {
  id: string,
  name: string,
  numStars: number,
  price: string,
  tags: string[],
  venue: string,
  dates: string,
  creatives: string[],
  description: string,
  emoji: string,
}

const EventPostData: EventPost[] = [
  {
    id: "e1",
    name: "What to Send Up When It Goes Down",
    numStars: 88,
    price: "$25.00",
    tags: [ "Play", "Outdoor","Social Justice"],
    venue: "Brooklyn Botanic Garden",
    dates: "6/1-6/10",
    creatives: ["Aleshea Harris","Whitney White"],
    description: "A play, a ritual, and a home-going celebration that bears witness to the physical and spiritual deaths of Black people as a result of racist violence.",
    emoji: "✨"
  },
  {
    id: "e2",
    name: "Blindness",
    numStars: 120,
    price: "$48.00",
    tags: [ "Immersive", "Indoor"],
    venue: "Daryl Roth Theatre",
    dates: "4/2-9/5",
    creatives: ["Simon Stephens","Walter M."],
    description: "A new adaptation of Nobel Prize-winner José Saramago’s 1995 dystopian novel by Tony Award winning playwright Simon Stephens, is a socially distanced sound narrative.",
    emoji: "⚡"
  },
  {
    id: "e3",
    name: "The Fever",
    numStars: 110,
    price: "$20.00",
    tags: [ "Immersive", "Indoor"],
    venue: "The Public Theater",
    dates: "10/1-10/15",
    creatives: ["600 HIGHWAYMEN"],
    description: "A performance built from our dependence on one another. The Fever is a public convergence for today, asking how we assemble, organize, and care for the bodies around us.",
    emoji: "🔥"
  },
]

export { EventPost, EventPostData };