export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid gap-8 md:grid-cols-3 text-sm">
          {/* Project Info */}
          <div>
            <h3 className="font-semibold mb-3">AI Literacy Initiative</h3>
            <p className="text-muted-foreground leading-relaxed">
              Giving future teachers practical interview preparation and explore
              new technologies so they feel more confident using them in the
              classroom.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-foreground transition-colors cursor-pointer">
                Home
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">
                Faculty Flow
              </li>
              <li className="hover:text-foreground transition-colors cursor-pointer">
                Student Flow
              </li>
            </ul>
          </div>

          {/* Contact / Attribution */}
          <div>
            <h3 className="font-semibold mb-3">Project Details</h3>
            <p className="text-muted-foreground leading-relaxed">
              The project was created as an academic project of CSUN aimed at
              enhancing AI literacy in teacher education.
            </p>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-10 pt-6 border-t text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} AI Literacy Initiative · California State
          University, Northridge
        </div>
      </div>
    </footer>
  );
}
