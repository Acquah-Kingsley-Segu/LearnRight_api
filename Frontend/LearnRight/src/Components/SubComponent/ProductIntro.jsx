import { NavLink } from "react-router-dom";

const ProductInfo = () => {
  return(
    <aside className="w-1/3 relative top-32 left-20 p-3 text-white">
      <article className="mb-5">
        <h1 className="text-4xl mb-3">Lorem Ipsum</h1>
        <p>
          "Unlock Your Full Learning Potential with LearnRight:
          Where Proven Techniques Meet Personalized Learning Paths. 
          Join Us Today and Elevate Your Educational Journey!"
        </p>
      </article>
      <NavLink className="bg-blue-600 p-3 text-white font-medium rounded-lg my-2 text-lg">Sign up now</NavLink>
    </aside>
  )
}

export default ProductInfo;