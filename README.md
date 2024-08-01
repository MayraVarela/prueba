# Mini-Webapp de Películas

Esta mini-webapp permite a los usuarios visualizar un listado de películas con su póster, título y fecha de estreno. Los usuarios pueden seleccionar una película para ver más detalles y calificarla mediante un formulario. A continuación, se detallan las decisiones detrás de las dependencias utilizadas en el proyecto.

Dependencias Principales

Redux Tooolkit: En esta aplicación, el almacenamiento de las películas en la lista de favoritos (/mylist) se gestiona utilizando Redux Toolkit en combinación con localStorage para asegurar que la lista persista entre sesiones. Cada vez que un usuario agrega o elimina una película de la lista de favoritos, se actualiza el estado global gestionado por Redux Toolkit. Posteriormente, este estado se sincroniza con localStorage mediante middleware personalizado, garantizando que los cambios se persistan incluso después de cerrar el navegador. Al iniciar la aplicación, los datos se recuperan de localStorage y se rehidratan en el estado de Redux, lo que permite a los usuarios acceder a su lista de favoritos actualizada sin perder información. Esta integración proporciona una experiencia de usuario consistente y persistente, manteniendo la lista de favoritos accesible y actualizada a través de sesiones.

next: Next.js se usó para aprovechar la renderización en el lado del servidor y la generación de sitios estáticos, mejorando el rendimiento y la optimización SEO de la aplicación. A demas de ser una dependencia novedosa, asi poder demostrar como lo uso personalmente

Tailwind CSS fue seleccionado para este proyecto debido a su enfoque flexible y eficiente para la creación de interfaces de usuario. Su capacidad para personalizar y ajustar el diseño rápidamente, junto con su enfoque en clases utilitarias, permite un desarrollo ágil y un diseño limpio y consistente. La integración con herramientas de desarrollo y su comunidad activa aportan un valor adicional al proceso de desarrollo.

@heroicons/react: Se eligió por su colección de íconos SVG de alta calidad y su integración sencilla con React, mejorando la experiencia visual de la aplicación.

react y react-dom: Fundamentales para la construcción de la interfaz de usuario y su renderización en el navegador, proporcionando un enfoque basado en componentes para el desarrollo.

react-icons: Facilita la integración de una amplia gama de íconos en la aplicación de manera flexible y optimizada.

Dependencias de Desarrollo
@types/node, @types/react, @types/react-dom: Proporcionan definiciones de tipos para TypeScript, mejorando la calidad del código y la experiencia de desarrollo al ofrecer autocompletado y verificación de tipos.

autoprefixer y postcss: Aseguran la compatibilidad con diferentes navegadores al añadir prefijos de navegador automáticamente, garantizando que el CSS funcione de manera consistente en distintos entornos.

eslint y eslint-config-next: Utilizados para mantener la calidad del código mediante el linting y aplicar las mejores prácticas recomendadas para proyectos Next.js.

typescript: Se usa para añadir tipado estático a JavaScript, mejorando la robustez y mantenibilidad del código mediante la detección de errores en tiempo de desarrollo.


Este proyecto combina tecnologías modernas para construir una aplicación web eficiente y fácil de mantener. Las decisiones tomadas en la selección de dependencias y la estructura del código buscan ofrecer una experiencia de usuario óptima y un desarrollo ágil y robusto. Cada herramienta y biblioteca ha sido elegida para cumplir con los requisitos específicos del proyecto y mejorar tanto la funcionalidad como la calidad del código.


Lógica de Programación del Repositorio:
El proyecto está organizado de manera modular, con carpetas y archivos separados para cada aspecto clave de la aplicación. La estructura típica incluye:

/pages: Contiene el endpoint ./mylist. En un proyecto Next.js, estas páginas son responsables de renderizar el contenido y manejar las rutas.
/components: Incluye componentes reutilizables como botones, formularios, listas, etc. Estos componentes son utilizados para construir la interfaz de usuario.
/redux: Aunque deberia llamarse features, le puse esa nombre para dejar claro que ahi estaba usando la dependencia de redux toolkit especificamente.Cada componente maneja una parte específica del estado global para poder hacer uso del local storage.
utils/requests.js se usa para centralizar y organizar las URLs de las solicitudes a la API de TMDb, facilitando su mantenimiento y reutilización en diferentes partes de la aplicación. En los componentes de tu aplicación, puedes importar este archivo y utilizar las URLs para hacer solicitudes a la API y obtener datos para mostrar en la interfaz de usuario.

Decision de Diseño

En el desarrollo de esta mini-webapp se basó en varias consideraciones estratégicas relacionadas con la experiencia del usuario (UX) y la interfaz de usuario (UI). A continuación, se detallan las razones detrás de esta decisión y cómo beneficia al proyecto.

1.Interfaz intuitiva y fácil de usar. Se busca aprovechar la familiaridad con otras app relacionadas que los usuarios tienen con este tipo de interfaz. Esto reduce la curva de aprendizaje y permite que los usuarios naveguen por la aplicación de manera más natural y eficiente.

2. Se centra en la presentación visual atractiva y efectiva del contenido. La disposición en tarjetas de películas, con imágenes destacadas y detalles concisos, facilita la exploración del catálogo. Este enfoque permite a los usuarios ver rápidamente la información relevante y tomar decisiones sobre qué contenido ver, mejorando la eficiencia en la búsqueda y selección de películas.

3. El diseño se adapta bien a diferentes tamaños de pantalla y dispositivos, proporcionando una experiencia de usuario consistente en móviles, tabletas y computadoras de escritorio. con Tailwind se asegura que la aplicación sea responsiva y funcional en diversos dispositivos, garantizando una experiencia de usuario fluida sin importar el dispositivo utilizado.

CONCLUSIÖN:
La lógica de programación del repositorio se basa en una combinación de Redux Toolkit para la gestión del estado, Tailwind CSS para la estilización, y la API de TMDb para obtener datos de películas. La aplicación utiliza un enfoque modular y para manejar el estado global, interactuar con APIs externas y presentar una interfaz de usuario atractiva y responsiva. Esta estructura permite un desarrollo ágil y un mantenimiento sencillo, proporcionando una experiencia de usuario fluida y consistente.

¡Gracias por revisar el proyecto!

