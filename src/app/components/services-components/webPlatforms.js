const WebPlatforms = () => {
    const platforms = [
      { name: "Angular", img:"	https://codeupscale.com/services_images/web_development/angular.svg" },
      { name: "Asp Net", img: "	https://codeupscale.com/services_images/web_development/asp_net.svg" },
      { name: "C#", img: "https://codeupscale.com/services_images/web_development/csharp.svg" },
      { name: "CSS", img: "https://codeupscale.com/services_images/web_development/css.svg" },
      { name: "Django", img: "https://codeupscale.com/services_images/web_development/django.svg" },

      { name: "Elixir", img:"https://codeupscale.com/services_images/web_development/Elixir.svg" },
      { name: "Express", img: "	https://codeupscale.com/services_images/web_development/express.svg" },
      { name: "Flask", img: "https://codeupscale.com/services_images/web_development/flask.svg" },
      { name: "GoLang", img: "	https://codeupscale.com/services_images/web_development/GoLang.svg" },
      { name: "Html", img: "https://codeupscale.com/services_images/web_development/html.svg" },

      { name: "Java", img:"https://codeupscale.com/services_images/web_development/java.svg" },
      { name: "JavaScript", img: "https://codeupscale.com/services_images/web_development/javascript.svg" },
      { name: "JQuery", img: "https://codeupscale.com/services_images/web_development/jquery.svg" },
      { name: "Laravel", img: "	https://codeupscale.com/services_images/web_development/laravel.svg" },
      { name: "Node", img: "https://codeupscale.com/services_images/web_development/node.svg" },

      { name: "PHP", img:"https://codeupscale.com/services_images/web_development/php.svg" },
      { name: "Python", img: "https://codeupscale.com/services_images/web_development/python.svg" },
      { name: "React", img: "https://codeupscale.com/services_images/web_development/react.svg" },
      { name: "Ruby", img: "https://codeupscale.com/services_images/web_development/ruby.svg" },
      { name: "Sass", img: "	https://codeupscale.com/services_images/web_development/sass.svg" },

      { name: "SpringBot", img: "	https://codeupscale.com/services_images/web_development/springbot.svg" },
      { name: "TypeScript", img: "https://codeupscale.com/services_images/web_development/typescript.svg" },
      { name: "Vue", img: "	https://codeupscale.com/services_images/web_development/vue_js.svg" }
    ];
  
    return (
      <section className="py-10 bg-white text-center">
        <h5 className="text-purple-600 font-semibold text-lg">Web Development Platforms</h5>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">
          Revolutionize Your Brand With <br /> Advanced Web Development Platforms
        </h1>
        <div className="flex flex-wrap justify-center gap-4 mt-10">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center w-40 h-40 hover:shadow-lg transition duration-300"
            >
              <img src={platform.img} alt={platform.name} className="w-16 h-16" />
              <p className="mt-2 font-semibold text-black">{platform.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default WebPlatforms;
  