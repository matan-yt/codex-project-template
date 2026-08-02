"use client";
import { useEffect } from "react";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) { useEffect(() => { console.error(error); }, [error]); return <div className="mx-auto max-w-lg py-20"><Alert variant="error"><div><p className="font-bold">We could not load this page.</p><p className="mt-1">Check your connection and try again.</p></div></Alert><Button className="mt-5" onClick={reset}>Try again</Button></div>; }
