const preguntas = [
    {
        nivel: 1,
        pregunta: "¿En qué año llegó el hombre a la Luna?",
        opcion1:"1810",
        opcion2:"1969",
        opcion3:"1810",
        opcion4:"1970",
        respuesta:"1969",

    },
    {
        nivel: 1,
        pregunta: "¿Cómo se conocía la Primera Guerra Mundial antes de que estallara la segunda?",
        opcion1:"La Gran Guerra",
        opcion2:"La Madre de Todas las Guerras",
        opcion3:"La Guerra de Guerras",
        opcion4:"La Guerra Total",
        respuesta:"La Gran Guerra",

    },
    {
        nivel: 1,
        pregunta: "¿En qué año se disolvió la Unión Soviética?",
        opcion1:"1910",
        opcion2:"1991",
        opcion3:"1991",
        opcion4:"2001",
        respuesta:"1991",

    },
    {
        nivel: 1,
        pregunta: "¿Qué reina británica fue hija de los Reyes Católicos?",
        opcion1:"Catalina la Española",
        opcion2:"María de los Ángeles",
        opcion3:"Catalina de Aragón",
        opcion4:"Juana de Arco",
        respuesta:"Catalina de Aragón",

    },
    {
        nivel: 1,
        pregunta: "¿Qué carabela no regresó del primer viaje de Colón al Nuevo Mundo?",
        opcion1:"La Niña",
        opcion2:"La Pinta",
        opcion3:"La Santa María",
        opcion4:"Ninguna",
        respuesta:"La Santa María",

    },
    {
        nivel: 2,
        pregunta: "¿Cuál es el río más caudaloso del mundo?",
        opcion1:"El Atrato",
        opcion2:"El Nilo",
        opcion3:"El Amazonas",
        opcion4:"El Bogotá",
        respuesta:"El Amazonas",

    },
    {
        nivel: 2,
        pregunta: "¿Dónde se encuentra la Casa Rosada?",
        opcion1:"Colombia",
        opcion2:"Perú",
        opcion3:"Brazil",
        opcion4:"Argentina",
        respuesta:"Argentina",

    },
    {
        nivel: 2,
        pregunta: "¿A qué país pertenece la isla de Creta?",
        opcion1:"Francia",
        opcion2:"Estados Unidos",
        opcion3:"Irlanda",
        opcion4:"Grecia",
        respuesta:"Grecia",

    },
    {
        nivel: 2,
        pregunta: "¿Cómo se llama la línea vertical imaginaria que divide el mundo en dos mitades?",
        opcion1:"El meridiano de Greenwich",
        opcion2:"Ninguna de las opciones",
        opcion3:"El Ecuador",
        opcion4:"El meridiano del Globo",
        respuesta:"El meridiano de Greenwich",

    },
    {
        nivel: 2,
        pregunta: " ¿Cuál es el país más visitado del mundo?",
        opcion1:"Estados Unidos",
        opcion2:"Perú",
        opcion3:"Francia",
        opcion4:"Colombia",
        respuesta:"Francia",

    },
    {
        nivel: 3,
        pregunta: "¿Quién pintó el 'Guernica'?",
        opcion1:"Diego Velázquez",
        opcion2:"Claude Monet",
        opcion3:"Pablo Picasso",
        opcion4:"Vincent Van Gogh",
        respuesta:"Pablo Picasso",

    },
    {
        nivel: 3,
        pregunta: "¿Qué tipo de instrumento es una cítara?",
        opcion1:"De viento",
        opcion2:"De percusión",
        opcion3:"De cuerda",
        opcion4:"No es un instrumento musical",
        respuesta:"De cuerda",

    },
    {
        nivel: 3,
        pregunta: "¿Cómo se llama el caballo de Don Quijote de la Mancha?",
        opcion1:"Blanco",
        opcion2:"Equino",
        opcion3:"Rocinante",
        opcion4:"Negrito",
        respuesta:"Rocinante",

    },
    {
        nivel: 3,
        pregunta: "¿Qué pintor noruego pintó 'El grito'?",
        opcion1:"Diego Velázquez",
        opcion2:"Pablo Picasso",
        opcion3:"Edvard Munch",
        opcion4:"Vincent Van Gogh",
        respuesta:"Edvard Munch",

    },
    {
        nivel: 3,
        pregunta: "¿Qué escritor español era conocido como 'El manco de Lepanto'?",
        opcion1:"Miguel de Cervantes",
        opcion2:"García Marquez",
        opcion3:"Shakespeare",
        opcion4:"Platón",
        respuesta:"Miguel de Cervantes",

    },
    {
        nivel: 4,
        pregunta: "¿Qué número viene después del 14 en los decimales del Pi?",
        opcion1:"2",
        opcion2:"5",
        opcion3:"4",
        opcion4:"1",
        respuesta:"1",

    },
    {
        nivel: 4,
        pregunta: "¿Cuántos elementos tiene la tabla periódica?",
        opcion1:"118",
        opcion2:"458",
        opcion3:"130",
        opcion4:"123",
        respuesta:"118",

    },
    {
        nivel: 4,
        pregunta: "¿Cuáles son las bases nitrogenadas del ADN?",
        opcion1:"Tiamina y vitamina",
        opcion2:"Adenina, timina, guanina y citosina",
        opcion3:"Oxigeno, fosforo y azufre",
        opcion4:"Boro, cloro y hierro",
        respuesta:"Adenina, timina, guanina y citosina",

    },
    {
        nivel: 4,
        pregunta: "¿Cuál es la velocidad aproximada de la luz?",
        opcion1:"858 kilómetros por segundo",
        opcion2:"300.000 kilómetros por segundo",
        opcion3:"125 metros por segundo",
        opcion4:"1.254.000 metros por segundo",
        respuesta:"300.000 kilómetros por segundo",

    },
    {
        nivel: 4,
        pregunta: "De los cinco sentidos, ¿cuál es el que se desarrolla primero?",
        opcion1:"El gusto",
        opcion2:"El olfato",
        opcion3:"La vista",
        opcion4:"El tacto",
        respuesta:"El olfato",

    },
    {
        nivel: 5,
        pregunta: "¿Quién escribió la novela gráfica “Watchmen”?",
        opcion1:"Max Plank",
        opcion2:"Jhon Kennedy",
        opcion3:"Alan Moore",
        opcion4:"Jhon Carter",
        respuesta:"Alan Moore",

    },
    {
        nivel: 5,
        pregunta: "¿En qué calle ficticia vivía Sherlock Holmes?",
        opcion1:"Baker Street",
        opcion2:"Fake Street",
        opcion3:"Upper Street",
        opcion4:"Downing Street",
        respuesta:"Baker Street",

    },
    {
        nivel: 5,
        pregunta: "¿Cuál de los actores que ha interpretado a James Bond luchó contra el Dr. No?",
        opcion1:"Daniel Craig",
        opcion2:"Roger Moore",
        opcion3:"Sean Connery",
        opcion4:"Pierce Brosnan",
        respuesta:"Sean Connery",

    },
    {
        nivel: 5,
        pregunta: "¿Cómo se llama el perro de Tintín?",
        opcion1:"Firulais",
        opcion2:"Trosky",
        opcion3:"Milú",
        opcion4:"Fifí",
        respuesta:"Milú",

    },
    {
        nivel: 5,
        pregunta: "¿La película 'El club de la lucha' está basado en la novela homónima de qué autor?",
        opcion1:"Adam Placeholder",
        opcion2:"Jhon Carter",
        opcion3:"Chuck Palahniuk",
        opcion4:"Peter Straub",
        respuesta:"Chuck Palahniuk",

    },

]