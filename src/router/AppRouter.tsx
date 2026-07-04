import { AiAssistantPage } from '@/pages/AiAssistantPage'
import { CryptoDetailPage } from '@/pages/CryptoDetailPage'
import { DashboardPage } from '@/pages/DashboardPage'
import { LearnWeb3Page } from '@/pages/LearnWeb3Page'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/crypto/:id" element={<CryptoDetailPage />} />
        <Route path="/ai" element={<AiAssistantPage />} />
        <Route path="/learn" element={<LearnWeb3Page />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
