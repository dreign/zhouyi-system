-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "password" TEXT,
    "avatar" TEXT,
    "language" TEXT NOT NULL DEFAULT 'zh-CN',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "token_balance" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "balance" INTEGER NOT NULL DEFAULT 0,
    "totalPurchased" INTEGER NOT NULL DEFAULT 0,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "token_balance_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "token_usage" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "tokens" INTEGER NOT NULL,
    "cost" INTEGER NOT NULL,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "token_usage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "divination_records" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "input_data" TEXT NOT NULL,
    "result" TEXT NOT NULL,
    "detail_result" TEXT,
    "isPaid" BOOLEAN NOT NULL DEFAULT false,
    "cost" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "divination_records_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "gua_data" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "summary" TEXT,
    "guaci" TEXT,
    "yaoci" TEXT,
    "interpretation" TEXT,

    CONSTRAINT "gua_data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "character_data" (
    "id" SERIAL NOT NULL,
    "char" TEXT NOT NULL,
    "stroke" INTEGER NOT NULL,
    "pinyin" TEXT,
    "wuxing" TEXT,
    "kangxi_stroke" INTEGER,

    CONSTRAINT "character_data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "token_balance_user_id_key" ON "token_balance"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "gua_data_code_key" ON "gua_data"("code");

-- CreateIndex
CREATE UNIQUE INDEX "character_data_char_key" ON "character_data"("char");

-- AddForeignKey
ALTER TABLE "token_balance" ADD CONSTRAINT "token_balance_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "token_usage" ADD CONSTRAINT "token_usage_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "divination_records" ADD CONSTRAINT "divination_records_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
