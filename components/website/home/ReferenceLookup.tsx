import { WHATSAPP_BASE_URL } from '@/lib/sgd-listings'

export default function ReferenceLookup() {
  return (
    <form
      data-marketplace-search
      action={WHATSAPP_BASE_URL}
      method="get"
      target="_blank"
      rel="noopener noreferrer"
      className="marketplace-search"
      aria-label="Check an SGD item reference"
    >
      <div className="marketplace-search__copy">
        <span className="marketplace-search__eyebrow">Already found an item?</span>
        <label htmlFor="sgd-reference" className="marketplace-search__label">
          Check an SGD reference
        </label>
      </div>
      <div className="marketplace-search__control">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="11" cy="11" r="6.5" />
          <path d="m16 16 4 4" />
        </svg>
        <input
          id="sgd-reference"
          name="text"
          placeholder="Example: SGD-AUG-163"
          autoComplete="off"
          required
        />
        <button type="submit">Check on WhatsApp</button>
      </div>
      <p className="marketplace-search__note">
        Availability and payment are confirmed by the SGD team—not by this website.
      </p>
    </form>
  )
}
