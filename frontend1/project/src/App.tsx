import React from "react"
import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { Sidebar } from "@/components/ui/sidebar"
import { Overview } from "@/components/dashboard/overview"
import { Analytics } from "@/components/dashboard/analytics"
import { Customers } from "@/components/dashboard/customers"
import { LoginForm } from "@/components/auth/LoginForm"
import { Users, Settings, Mail, ShoppingCart } from "lucide-react"
import { SignupForm } from "./components/auth/SignupForm"

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated")
    if (!isAuthenticated) {
      navigate("/login") // ✅ Redirect if not logged in
    }
  }, [navigate])

  return <>{children}</>
}

export default function App() {
  return (
    <>
      <ToastContainer /> {/* Add ToastContainer here */}
      <div className="flex h-screen bg-background">
        <Routes>
          {/* Login Page (No Sidebar) */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />

          {/* Protected Routes (With Sidebar) */}
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <div className="flex h-screen">
                  <Sidebar className="w-64 hidden md:block" />
                  <main className="flex-1 p-8 overflow-auto">
                    <div className="mx-auto max-w-7xl">
                      <Routes>
                        <Route path="/" element={<Overview />} />
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="/customers" element={<Customers />} />
                        <Route path="/orders" element={<ShoppingCart className="h-32 w-32 text-muted-foreground" />} />
                        <Route path="/messages" element={<Mail className="h-32 w-32 text-muted-foreground" />} />
                        <Route path="/settings" element={<Settings className="h-32 w-32 text-muted-foreground" />} />
                      </Routes>
                    </div>
                  </main>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </>
  )
}
