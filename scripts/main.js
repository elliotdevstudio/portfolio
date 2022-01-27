const faders = document.querySelectorAll('.fade-in');

            const appearOptions = { 
                threshold:1
            };

            const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll) {
                entries.forEach(entry =>
                {
                    if(entry.isIntersecting)
                    {
                        entry.target.classList.remove('appear');
                        entry.target.classList.remove('disappear');
                        entry.target.classList.add('appear');
                    }
                    else
                    {
                        entry.target.classList.remove('appear');
                        entry.target.classList.remove('disappear');
                        entry.target.classList.add('disappear');
                    }
                })
            },
            appearOptions); 
            
            faders.forEach(fader =>{
                appearOnScroll.observe(fader);
            });