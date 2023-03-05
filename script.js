const typingText = document.getElementById('typing-text');
      const text = "Experienced DevOps System Engineer with a focus on results who has worked in the fields of software configuration management, quality assurance, DevOps, build and release management for many years. Significant proficiency with Amazon Web Services (AWS), and Azure Infrastructure, Devops engineering, development and configuration, scripting tools, and system development tools are among the core competencies. Excellent technical troubleshooting abilities with system software and web platforms, experience previously assisting and working with system monitoring teams, DevOps engineers, and software development teams.";
      let index = 0;

      function type() {
        if (index < text.length) {
          typingText.innerHTML += text.charAt(index);
          index++;
          setTimeout(type, 50);
        }
      }

      type();

