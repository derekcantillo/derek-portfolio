import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Theme = 'light' | 'dark' | 'system'

interface ThemeState {
	theme: Theme
	setTheme: (theme: Theme) => void
	getEffectiveTheme: () => 'light' | 'dark'
}

const getSystemTheme = (): 'light' | 'dark' => {
	if (typeof window === 'undefined') return 'light'
	return window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light'
}

export const useThemeStore = create<ThemeState>()(
	persist(
		(set, get) => ({
			theme: 'system',
			setTheme: (theme: Theme) => set({ theme }),
			getEffectiveTheme: () => {
				const { theme } = get()
				if (theme === 'system') {
					return getSystemTheme()
				}
				return theme
			}
		}),
		{
			name: 'theme-storage',
			partialize: state => ({ theme: state.theme })
		}
	)
)
