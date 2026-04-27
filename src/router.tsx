import { createRouter, useRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import ReactDOM from 'react-dom/client'

// 1. Komponenta pro chyby
function DefaultErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-bold">Něco se nepovedlo</h1>
        <button className="mt-4 bg-primary px-4 py-2 rounded text-white" onClick={() => { router.invalidate(); reset(); }}>Zkusit znovu</button>
      </div>
    </div>
  );
}

// 2. Definice routeru
export const router = createRouter({
  routeTree,
  context: {},
  scrollRestoration: true,
  defaultPreloadStaleTime: 0,
  defaultErrorComponent: DefaultErrorComponent,
});

// 3. TADY JE TA OPRAVA: Vrátíme funkci getRouter, kterou build hledá
export const getRouter = () => router;

// 4. Registrace pro TypeScript
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// 5. Vykreslení do stránky (pro statický Vercel hosting)
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<RouterProvider router={router} />)
}
