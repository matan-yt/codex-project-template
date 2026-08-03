export const QUESTION_TYPES = ['multiple_choice', 'true_false'] as const;
export const QUESTION_STATUSES = ['draft', 'published', 'archived'] as const;
export type QuestionType = (typeof QUESTION_TYPES)[number];
export type QuestionStatus = (typeof QUESTION_STATUSES)[number];
export type Category = { id: string; name: string; description: string; sort_order: number };
export type MediaAsset = { id: string; type: 'image' | 'video'; storage_path: string; file_name: string; metadata: { size?: number; mimeType?: string }; signedUrl?: string };
export type Answer = { id?: string; label: string; is_correct: boolean; display_order: number };
export type Question = { id: string; title: string; question_type: QuestionType; difficulty: number; status: QuestionStatus; internal_notes: string; category_id: string; media_id: string | null; categories: Pick<Category, 'name'> | null; media: MediaAsset | null; answers: Answer[] };
