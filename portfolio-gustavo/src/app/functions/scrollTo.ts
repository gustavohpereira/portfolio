export default function scrollToSection(sectionId:string):void {
    const section = document.getElementById(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth',
        });
    }

    
    
}