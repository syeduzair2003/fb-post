import React from "react";
import Post from "./Components/Post";

function App() {
  const postData = {
    createdBy: "Shahid & Sons - Decoration & Catering Services",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8kr5ltnyGg34Fs7lb4BI979JWDKI-GrIXg&s",
    description: (
      <>
        
        With the experience of 20 Years, Alhumdulillah Shahid & Sons Providing
        Quality Decoration & Catering services at your Desire Place. <br />
        Suggested Menu <br /> Appetizer <br /> Crispy Calamari, Garlic Butter
        Shrimp, Stuffed Mushrooms, Mozzarella Sticks, Spinach & Artichoke Dip,
        Chicken Wings, Nacho Platter, Bruschetta
      </>
    ),
    images: [
      "./img1.jpg",
      "./img2.jpg",
      "./img3.jpg",
      "./img4.jpg",
      "./img5.jpg",
      "./img6.jpg",
    ],
    createdAt: Date.now() - 0,
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <Post post={postData} />
    </div>
  );
}

export default App;
