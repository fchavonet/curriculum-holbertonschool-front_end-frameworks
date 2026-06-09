<script>
  import Brand from "../ui/Brand.svelte";
  import SocialLink from "../ui/SocialLink.svelte";

  const currentYear = new Date().getFullYear();
</script>

<footer class="bg-black px-6">
  <div class="max-w-6xl mx-auto pt-24 pb-12 grid md:grid-cols-5 gap-8">
    <div class="md:col-span-2 flex flex-col justify-start items-start gap-4">
      <Brand href="#top" />

      <p class="text-xs text-slate-500">
        Explore the future of development with Agentic AI.
      </p>

      <div class="flex flex-row justify-start items-center gap-2">
        <SocialLink href="https://www.instagram.com/holbertonfrance/" label="Instagram" iconClassName="bi bi-instagram" />
        <SocialLink href="https://www.tiktok.com/@holbertonfrance" label="TikTok" iconClassName="bi bi-tiktok" />
        <SocialLink href="https://x.com/HolbertonFRA" label="X" iconClassName="bi bi-twitter-x" />
        <SocialLink href="https://www.youtube.com/@HolbertonFrance" label="Youtube" iconClassName="bi bi-youtube" />
      </div>
    </div>

    <div>
      <h3 class="mb-4 text-sm font-bold">Navigation</h3>

      <ul class="text-xs text-slate-500 flex flex-col justify-start items-start gap-2">
        <li><a class="hover:text-slate-50" href="#hero-section">Hero section</a></li>
        <li><a class="hover:text-slate-50" href="#about-section">About</a></li>
        <li><a class="hover:text-slate-50" href="#features-section">Features</a></li>
        <li><a class="hover:text-slate-50" href="#insights-section">Insights</a></li>
        <li><a class="hover:text-slate-50" href="#contact-section">Contact</a></li>
      </ul>
    </div>

    <div>
      <h3 class="mb-4 text-sm font-bold">Holberton School</h3>

      <ul class="text-xs text-slate-500 flex flex-col justify-start items-start gap-2">
        <li><a class="hover:text-slate-50" href="https://www.holbertonschool.fr/" target="_blank" rel="noopener noreferrer">About</a></li>
        <li><a class="hover:text-slate-50" href="https://www.holbertonschool.fr/methodologie" target="_blank" rel="noopener noreferrer">Methodology</a></li>
        <li><a class="hover:text-slate-50" href="https://www.holbertonschool.fr/a-propos" target="_blank" rel="noopener noreferrer">Story</a></li>
        <li><a class="hover:text-slate-50" href="https://www.holbertonschool.fr/" target="_blank" rel="noopener noreferrer">Agenda</a></li>
      </ul>
    </div>

    <div>
      <h3 class="mb-4 text-sm font-bold">Curriculum</h3>

      <ul class="text-xs text-slate-500 flex flex-col justify-start items-start gap-2">
        <li><a class="hover:text-slate-50" href="https://www.holbertonschool.fr/programme/bachelor-ai-augmented-software-engineering" target="_blank" rel="noopener noreferrer">Bachelor</a></li>
        <li><a class="hover:text-slate-50" href="https://www.holbertonschool.fr/programme/bachelor-ai-augmented-software-engineering#programme" target="_blank" rel="noopener noreferrer">Program</a></li>
      </ul>
    </div>
  </div>

  <div class="max-w-6xl mx-auto pt-6 pb-24 flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center text-xs text-slate-500 border-t border-slate-900">
    <p>© {currentYear} <a href="https://github.com/fchavonet" target="_blank" rel="noopener noreferrer">Fabien Chavonet</a></p>
    <p>Built for the Holberton School Front-end Frameworks curriculum.</p>
  </div>
</footer>
