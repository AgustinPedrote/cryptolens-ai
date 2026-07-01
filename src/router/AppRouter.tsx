import { AiAssistantPage } from '@/pages/AiAssistantPage'
import { DashboardPage } from '@/pages/DashboardPage'
import { LearnPage } from '@/pages/LearnPage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/ai" element={<AiAssistantPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
