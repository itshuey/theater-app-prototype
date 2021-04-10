import { EventPost } from './eventpostdata'

interface CommentSchema {
  id: string,
  name: string,
  pictureUrl: string,
  comment: string,
  numLikes: number
}

interface ReviewPost {
  id: string,
  username: string,
  pictureUrl: string,
  timeStamp: string,
  review: string,
  event: EventPost,
  numLikes: number,
  numComments: number,
  comments: Comment[],
  type: string,
}

const ReviewPostData: ReviewPost[] = [
  {
    id: "r1",
    username: "Elisabeth Vincentelli",
    pictureUrl: "../assets/images/defaultprofile.png",
    timeStamp: "7 hours ago",
    type: "review",
    review: "Short Review: From the start, Harris makes clear that she wrote the play for black people, and the audience participation is guaranteed to make some viewers uncomfortable. So be. It: this is theatre as art, exorcism, balm, and battle cry...",
    event: {
      name: "What to Send Up when It Goes Down",
      numStars: 88,
      price: "$25.00",
      tags: [ "Play", "Outdoor","Social Ju..."],
      venue: "Brooklyn Botanic Garden",
      dates: "6/1-6/10/2021",
      creatives: ["Aleshea Harris","Whitney White"],
      description: "A play, a ritual, and a home-going celebration that bears witness to the physical and spiritual deaths of Black people as a result of racist violence.",
    },
    numLikes: 211,
    numComments: 21,
    comments: [
      {
        id: "c1",
        name: "Abby",
        pictureUrl: "../assets/images/defaultprofile.png",
        timeStamp: "6 hours ago",
        comment: "Aleshea Harris is such a talented playwright who tells stories from her heart.",
        numLikes: 3,
      },
      {
        id: "c2",
        name: "Bobby",
        pictureUrl: "../assets/images/defaultprofile.png",
        timeStamp: "5 hours ago",
        comment: "I resonated with this piece so much.",
        numLikes: 1,
      },
      {
        id: "c3",
        name: "Callie",
        pictureUrl: "../assets/images/defaultprofile.png",
        timeStamp: "2 hours ago",
        comment: "Well said.",
        numLikes: 2,
      },
    ]
  },
  {
    id: "r2",
    username: "Anna Diva",
    pictureUrl: "../assets/images/defaultprofile.png",
    timeStamp: "Just now",
    review: "Anna Diva is in the Show The Grand Reopening",
    event: {
      name: "The Grand Reopening",
      numStars: 5,
      price: "$15.00",
      tags: [ "Musical", "Comedy"],
      venue: "The Grand Theater",
      dates: "9/1-9/30/2021",
      creatives: ["Garry Goldenthroat","Anna Diva"],
      description: "The golden pair Anna Diva and Garry Goldenthroat are finally back on stage after a year-long shutdown.",
    },
    numLikes: 18,
    numComments: 3,
    comments: [
      {
        id: "c1",
        name: "Name",
        pictureUrl: "../assets/images/defaultprofile.png",
        timeStamp: "6 hours ago",
        comment: "Lorem ipsum dolores ez",
        numLikes: 33,
      },
      {
        id: "c2",
        name: "Name",
        pictureUrl: "../assets/images/defaultprofile.png",
        timeStamp: "8 hours ago",
        comment: "Lorem ipsum dolores est",
        numLikes: 30,
      },
      {
        id: "c3",
        name: "Name",
        pictureUrl: "../assets/images/defaultprofile.png",
        timeStamp: "6 hours ago",
        comment: "Lorem ipsum dolores est",
        numLikes: 50,
      },
    ]
  },
]

export { CommentSchema, ReviewPost, ReviewPostData };