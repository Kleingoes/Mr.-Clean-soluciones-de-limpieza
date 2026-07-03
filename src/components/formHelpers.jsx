/* eslint-disable react-refresh/only-export-components */
export const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY
export const WEB3FORMS_KEY2 = import.meta.env.VITE_WEB3FORMS_KEY2

export const SERVICIOS = [
  '★ Servicio de Limpieza Permanente (Recomendado)',
  'Pulido de Pisos',
  'Limpieza de Oficinas',
  'Lavado de Alfombras',
  'Sanitización de Espacios',
  'Limpieza de Locales Comerciales',
  'Limpieza de Ventanas y Cristales',
  'Limpieza de Clínicas y Hospitales',
  'Limpieza de Casas y Departamentos',
  'Limpieza Fina para Entrega de Obras',
  'Lavado de Ductos y Cocinas Industriales',
]

export async function submitToBoth(payload) {
  const results = await Promise.allSettled([
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...payload }),
    }),
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ access_key: WEB3FORMS_KEY2, ...payload }),
    }),
  ])
  return results.every(r => r.status === 'fulfilled' && r.value.ok)
}

export function FormCard({ children }) {
  return (
    <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
      {children}
    </div>
  )
}

export function renderField({ name, label, type = 'text', placeholder, options, className, form, errors, setField, disabled, min, max }) {
  const baseCls = 'w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 font-body text-sm outline-none transition-all focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/25'
  const disabledCls = 'w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 font-body text-sm text-gray-500 cursor-default'
  const errCls = 'w-full bg-white border border-red-400 rounded-xl px-4 py-3.5 font-body text-sm outline-none transition-all focus:border-red-500 focus:ring-4 focus:ring-red-200'
  const hasError = !!errors[name]
  const cls = disabled ? disabledCls : (hasError ? errCls : baseCls)

  return (
    <div className={className}>
      <label htmlFor={name} className="font-body text-sm font-medium text-gray-500 mb-2">{label}</label>
      {options ? (
        <select id={name} name={name} value={form[name]} onChange={setField(name)} className={cls}>
          <option value="">{placeholder || 'Selecciona un servicio'}</option>
          {options.map((o) => <option key={o}>{o}</option>)}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={form[name]}
          onChange={setField(name)}
          placeholder={placeholder}
          className={cls}
          disabled={disabled || undefined}
          min={min}
          max={max}
          aria-invalid={hasError || undefined}
          aria-describedby={hasError ? `${name}-error` : undefined}
        />
      )}
      {hasError && (
        <p id={`${name}-error`} className="text-red-500 text-xs font-medium mt-1.5" role="alert">{errors[name]}</p>
      )}
    </div>
  )
}

export function renderRadio({ name, label, options, form, errors, setField }) {
  const hasError = !!errors[name]

  return (
    <div>
      <label className="font-body text-sm font-medium text-gray-500 mb-2 block">{label}</label>
      <div className="flex gap-3">
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => setField(name)({ target: { value: opt.value } })}
            className={`flex-1 py-3.5 px-4 rounded-xl font-body text-sm font-semibold transition-all duration-200 border ${
              form[name] === opt.value
                ? 'bg-brand-blue text-white border-brand-blue shadow-sm'
                : 'bg-white text-gray-500 border-gray-200 hover:border-gray-300'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>
      {hasError && (
        <p id={`${name}-error`} className="text-red-500 text-xs font-medium mt-1.5" role="alert">{errors[name]}</p>
      )}
    </div>
  )
}

export function renderTextarea({ name, label, placeholder, rows = 4, form, errors, setField }) {
  const baseCls = 'w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 font-body text-sm outline-none transition-all focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/25'
  const errCls = 'w-full bg-white border border-red-400 rounded-xl px-4 py-3.5 font-body text-sm outline-none transition-all focus:border-red-500 focus:ring-4 focus:ring-red-200'
  const hasError = !!errors[name]
  const cls = hasError ? errCls : baseCls

  return (
    <div>
      <label htmlFor={name} className="font-body text-sm font-medium text-gray-500 mb-2">{label}</label>
      <textarea
        id={name}
        name={name}
        rows={rows}
        value={form[name]}
        onChange={setField(name)}
        placeholder={placeholder}
        className={`${cls} resize-none`}
        aria-invalid={hasError || undefined}
        aria-describedby={hasError ? `${name}-error` : undefined}
      />
      {hasError && (
        <p id={`${name}-error`} className="text-red-500 text-xs font-medium mt-1.5" role="alert">{errors[name]}</p>
      )}
    </div>
  )
}
