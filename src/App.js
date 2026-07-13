import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

import Layout from "@/components/site/Layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Industries from "@/pages/Industries";
import Process from "@/pages/Process";
import Work from "@/pages/Work";
import Technology from "@/pages/Technology";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

function App() {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
        >
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route element={<Layout />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/services" element={<Services />} />
                            <Route
                                path="/industries"
                                element={<Industries />}
                            />
                            <Route path="/process" element={<Process />} />
                            <Route path="/work" element={<Work />} />
                            <Route
                                path="/technology"
                                element={<Technology />}
                            />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
                <Toaster
                    theme="system"
                    position="bottom-right"
                    toastOptions={{
                        className:
                            "font-mono text-sm border border-border bg-card text-card-foreground",
                    }}
                />
            </div>
        </ThemeProvider>
    );
}

export default App;
