import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient

export const getAllData = async (req, res) => {
    try {
        const user = await prisma.user.findMany()

        res.status(200).json({
            status: 'Success',
            data: user
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error
        })
    }
}

export const create = async (req, res) => {
    try {
        await prisma.user.create({
            data: {
                email: req.body.email,
                name: req.body.name
            }
        })

        res.status(200).json({
            status: 'success',
            message: 'Successfully insert user data'
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error
        })
    }
}

export const update = async (req, res) => {
    const checkNumber = !isNaN(req.params.id)

    if (!checkNumber) {
        throw 'Please enter valid number'
    }

    const id = parseInt(req.params.id)

    try {
        await prisma.user.update({
            where: {
                id: id
            },
            data: {
                email: req.body.email,
                name: req.body.name
            }
        })

        res.status(200).json({
            status: 'success',
            message: 'Successfully update user data'
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error
        })
    }
}

export const deleteUser = async (req, res) => {
    const checkNumber = !isNaN(req.params.id)

    if (!checkNumber) {
        throw 'Please enter valid number'
    }

    const id = parseInt(req.params.id)

    try {
        await prisma.user.delete({
            where: {
                id: id,
            }
        })

        res.status(200).json({
            status: 'success',
            message: 'Successfully delete user data'
        })
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error
        })
    }
}