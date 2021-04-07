interface EventPost {
  id: string,
  name: string,
  numStars: number,
  price: string,
  tags: string[],
  venue: string,
  dates: string,
  creatives: string[],
  description: string
}

const EventPostData: EventPost[] = [
  {
    id: "p1",
    name: "Name",
    numStars: 50,
    price: "$0.00",
    tags: [ "Tag 1", "Tag 2"],
    venue: "Venue Name here",
    dates: "4/5-4/7",
    creatives: ["",""],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in eleifend est.",
  },
  {
    id: "p2",
    name: "Name 2",
    numStars: 47,
    price: "$0.00",
    tags: [ "Drama", "Tag 2"],
    venue: "Venue Name here",
    dates: "Dates",
    creatives: ["",""],
    description: "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in eleifend est.",
  },
  {
    id: "p3",
    name: "Name 3",
    numStars: 50,
    price: "$0.00",
    tags: [ "Tag 1", "Tag 2"],
    venue: "Venue Name here",
    dates: "Dates",
    creatives: ["",""],
    description: "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in eleifend est.",
  },
]

export { EventPost, EventPostData };