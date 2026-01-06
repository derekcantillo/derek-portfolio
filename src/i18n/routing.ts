import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'

export const routing = defineRouting({
	// A list of all locales that are supported
	locales: ['en', 'es'],

	// Used when no locale matches
	defaultLocale: 'es',

	// Prefix the default locale in URLs (e.g. /es/about)
	// Set to 'as-needed' to only prefix non-default locales
	localePrefix: 'as-needed',

	// Enable automatic locale detection based on browser language
	localeDetection: true
})

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
	createNavigation(routing)

