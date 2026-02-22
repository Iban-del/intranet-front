Appform · TSX
Copier

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z, ZodSchema } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Loader2 } from "lucide-react"


// ─── Types ───────────────────────────────────────────────────────────────────

export interface AppFormProps<T extends ZodSchema> {
    schema: T                                        // schéma zod
    defaultValues: z.infer<T>                        // valeurs par défaut
    onSubmit: (values: z.infer<T>) => void | Promise<void>
    title?: string
    subtitle?: string
    icon?: string
    submitLabel?: string
    cancelLabel?: string
    onCancel?: () => void
    isLoading?: boolean
    children: (control: ReturnType<typeof useForm<z.infer<T>>>["control"]) => ReactNode
}

// ─── Styles ──────────────────────────────────────────────────────────────────

const S = {
    wrapper: {
        background:   "oklch(0.11 0.032 290)",
        borderColor:  "oklch(0.46 0.22 293 / 0.25)",
        boxShadow:    "0 25px 60px oklch(0.046 0.22 293 / 0.45)",
    },
    header: {
        background:   "linear-gradient(120deg, oklch(0.22 0.075 290 / 0.5), oklch(0.11 0.032 290))",
        borderColor:  "oklch(0.46 0.22 293 / 0.2)",
    },
    icon: {
        background:   "linear-gradient(135deg, #7c3aed, #d4a017)",
    },
    title: {
        fontFamily:   "'Cinzel', serif",
        color:        "oklch(0.82 0.12 78)",
    },
    subtitle: {
        color:        "oklch(0.52 0.032 290)",
    },
    separator: {
        background:   "oklch(0.46 0.22 293 / 0.2)",
    },
    btnCancel: {
        borderColor:  "oklch(0.46 0.22 293 / 0.35)",
        background:   "transparent",
        color:        "oklch(0.925 0.018 78)",
        fontFamily:   "'Raleway', sans-serif",
    },
    btnSubmit: {
        background:   "oklch(0.72 0.155 78)",
        color:        "oklch(0.075 0.022 290)",
        fontFamily:   "'Raleway', sans-serif",
    },
}

// ─── Component ───────────────────────────────────────────────────────────────

const AppForm = <T extends ZodSchema>({
    schema,
    defaultValues,
    onSubmit,
    title,
    subtitle,
    icon = "⚜",
    submitLabel  = "Enregistrer",
    cancelLabel  = "Annuler",
    onCancel,
    isLoading    = false,
    children,
}: AppFormProps<T>) => {

    const form = useForm<z.infer<T>>({
        resolver:      zodResolver(schema),
        defaultValues,
    })

    return (
        <div
            className="w-full max-w-lg rounded-2xl border shadow-2xl overflow-hidden"
            style={S.wrapper}
        >
            {/* ── Header ── */}
            {(title || subtitle) && (
                <div className="px-8 py-6 border-b" style={S.header}>
                    <div className="flex items-center gap-3">
                        <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                            style={S.icon}
                        >
                            {icon}
                        </div>
                        <div>
                            {title && (
                                <h2 className="text-base font-bold tracking-wide" style={S.title}>
                                    {title}
                                </h2>
                            )}
                            {subtitle && (
                                <p className="text-[12px] mt-0.5" style={S.subtitle}>
                                    {subtitle}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* ── Body ── */}
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} noValidate>

                    {/* Fields injectés via render prop */}
                    <div className="px-8 py-6 flex flex-col gap-5">
                        {children(form.control)}
                    </div>

                    <Separator style={S.separator} />

                    {/* ── Footer ── */}
                    <div className="px-8 py-5 flex items-center justify-end gap-3">
                        {onCancel && (
                            <Button
                                type="button"
                                variant="outline"
                                onClick={onCancel}
                                disabled={isLoading}
                                className="h-9 px-5 text-[13px] rounded-lg hover:border-primary hover:text-primary transition-all"
                                style={S.btnCancel}
                            >
                                {cancelLabel}
                            </Button>
                        )}

                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="h-9 px-6 text-[13px] font-semibold rounded-lg transition-all shadow-lg hover:brightness-110"
                            style={S.btnSubmit}
                        >
                            {isLoading && <Loader2 size={14} className="mr-2 animate-spin" />}
                            {submitLabel}
                        </Button>
                    </div>

                </form>
            </Form>
        </div>
    )
}