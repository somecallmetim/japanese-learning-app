-- CreateTable
CREATE TABLE "vocabulary_word" (
    "id" TEXT NOT NULL,
    "japanese" TEXT NOT NULL,
    "english" TEXT NOT NULL,

    CONSTRAINT "vocabulary_word_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tag" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_tagTovocabularyWord" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_tagTovocabularyWord_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "vocabulary_word_japanese_key" ON "vocabulary_word"("japanese");

-- CreateIndex
CREATE INDEX "_tagTovocabularyWord_B_index" ON "_tagTovocabularyWord"("B");

-- AddForeignKey
ALTER TABLE "_tagTovocabularyWord" ADD CONSTRAINT "_tagTovocabularyWord_A_fkey" FOREIGN KEY ("A") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_tagTovocabularyWord" ADD CONSTRAINT "_tagTovocabularyWord_B_fkey" FOREIGN KEY ("B") REFERENCES "vocabulary_word"("id") ON DELETE CASCADE ON UPDATE CASCADE;
