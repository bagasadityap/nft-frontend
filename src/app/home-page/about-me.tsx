export default function AboutMe() {
  return (
    <div className="about-me">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 py-16 max-w-5xl mx-auto">
            <div className="md:w-1/2 w-full text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4">About Monkeyz</h2>
                <p className="text-lg text-gray-300 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, doloribus quidem commodi velit numquam eaque unde voluptatibus quisquam consectetur odio natus optio ipsa provident ratione fuga repellat officia officiis aut minima ea rem voluptates. Quidem perspiciatis distinctio mollitia commodi tempora laudantium rem a sapiente quaerat adipisci fuga, fugiat in expedita.
                </p>
                <p className="text-lg text-gray-400">
                    Join me on this journey and own a piece of the future!
                </p>
            </div>
            <div className="md:w-1/2 w-full flex justify-center">
                <img
                    src="/assets/collections/1.jpg"
                    alt="About Me"
                    className="rounded-xl shadow-lg w-72 h-72 object-cover"
                />
            </div>
        </div>
    </div>
  );
}