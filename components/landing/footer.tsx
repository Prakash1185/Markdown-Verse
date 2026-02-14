import { Heart } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t border-dashed border-foreground/10 px-4 sm:px-6 lg:px-8 py-6 mt-16">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} MarkdownVerse. All rights reserved.</p>
                <p className="flex items-center gap-1.5">
                    Built with <Heart size={14} className="text-primary fill-primary" /> by
                    <span className="text-foreground font-medium"> <Link href="/" target="_blank">Prakash</Link> </span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;